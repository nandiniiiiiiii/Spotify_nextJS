import { prismaClient } from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server"
import {z} from 'zod'    //validating data structures
//@ts-ignore
import youtubesearchapi from "youtube-search-api"

const YT_REGEX =/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?(?!.*\blist=)(?:.*&)?v=|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(?:[?&]\S+)?$/;

const CreateStreamSchema = z.object({
    creatorId: z.string(),
    url: z.string() ,

})

export async function POST(req:NextRequest) {
    try {
        const data = CreateStreamSchema.parse(await req.json());
        const isYT = data.url.match(YT_REGEX)

        if(!isYT){
            return NextResponse.json({
                message: "Error while matching stream"
            },{
                status: 411
            })
        }

        const extractedId = data.url.split("?v=")[1];
        const res = youtubesearchapi.getVideoDetails(extractedId)
        const thumbnails = res.thumbnail.thumbnails
        thumbnails.sort((a:{width: number}, b:{width: number}) => a.width < b.width ? -1 : 1);

        const stream = await prismaClient.stream.create({
            //will create the actual table inside the db
            data: {
                userId: data.creatorId,
                url: data.url,
                extractedId,
                type: "Youtube",
                title: res.title ?? "cant find",
                smallImg: (thumbnails.length > 1 ? thumbnails[thumbnails.length -2].url : thumbnails[thumbnails.length-1].url) ?? "" ,
                bigImg: thumbnails[thumbnails.length - 1].url ?? ""
            }
        })

        return NextResponse.json({
            message: "Stream added",
            id: stream.id
        })
    } catch (error) {
        return NextResponse.json({
            message: "Error while streaming"
        },{
            status: 411
        })
    }

}

export async function GET(req: NextRequest) {
    const creatorId = req.nextUrl.searchParams.get("creatorId")
    const streams = await prismaClient.stream.findMany({
        where: {
            userId: creatorId ?? "",
        }
    })

    return NextResponse.json({
        streams
    })
}