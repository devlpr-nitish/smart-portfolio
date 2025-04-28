
import { connectToMongoDB } from "@/lib/mongodb";
import upload from "@/lib/multer";
import { projectModel } from "@/schema/project.schema";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

    // return new Promise((resolve, reject) => {
    //     upload.single('image')(request as any, {}, async (err: any) => {
    //         if (err) {
    //             return reject(
    //                 NextResponse.json({ message: 'Error uploading file', success: false }, { status: 400 })
    //             );
    //         }

            try {

                const body = await request.json();

                const { title, description, link, techs } = body;
                // const image = request.file ? `/uploads/${request.file.filename}` : null;

                await connectToMongoDB();

                const newProject = new projectModel({
                    title,
                    description,
                    link,
                    // image,
                    techs,
                });


                await newProject.save();
                return NextResponse.json(
                    { message: 'Project added successfully', success: true },
                    { status: 201 }
                );

            } catch (error) {
                console.error('Error adding project:', error);
                return NextResponse.json(
                    { message: 'Failed to add project', success: false },
                    { status: 500 }
                );
            }

        }