import Image from "next/image";
import { Inter } from "next/font/google";
import {VideoCard} from "@/components/VideoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <VideoCard
      title={"Standup comedy(Hindi)|Ravi gupta"}
      image={"photo.png"}
      thumbImage={"thumb.png"}
      auther={"Ravi gupta"}
      views={"14M"}
      timestamp={"13 days ago"}
    />
    <VideoCard
      title={"Standup comedy(Hindi)|Ravi gupta"}
      image={"photo.png"}
      thumbImage={"thumb.png"}
      auther={"Ravi gupta"}
      views={"14M"}
      timestamp={"13 days ago"}
    />
   </div>
  );
}
