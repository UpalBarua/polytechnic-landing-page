import { getAllPictures } from "@/lib/services";
import Image from "next/image";
import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

export const getStaticProps = async () => {
  try {
    const pictures = await getAllPictures();
    console.log(pictures);

    // const notices = (await getAllNotices()).slice(0, 3);

    return {
      props: {
        pictures: pictures,
      },
    };
  } catch (error) {
    console.log(error);
  }
};

const Gallery = ({ pictures }) => {
  console.log(pictures);
  return (
    <section className="mt-36 mr-4 ml-4 ">
      <h1 className="pb-8 text-2xl font-bold text-center">
        আমাদের স্মৃতিচারণ মুহূর্ত
      </h1>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {pictures?.map((picture) => (
          <div key={picture?.id}>
            {" "}
            <Image
              src={picture?.imageUrl}
              alt=""
              height={500}
              width={500}
            ></Image>
          </div>
        ))}
      </div>

      {/* <PhotoProvider>
        <div className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
            <div className="relative col-span-2 row-span-2 w-full h-full rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1545696968-1a5245650b36?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1545696968-1a5245650b36?q=80&w=1432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
            <div className="object-cover object-center relative col-span-2 row-span-2 w-full h-full rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square">
              <PhotoView src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="object-cover object-center"
                />
              </PhotoView>
            </div>
          </div>
        </div>
      </PhotoProvider> */}
    </section>
  );
};

export default Gallery;
