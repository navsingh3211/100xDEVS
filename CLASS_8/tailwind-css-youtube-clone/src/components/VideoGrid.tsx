import { VideoCard } from "./VideoCard";
const VIDEOS = [
  {
    _id:1,
    title:"Standup comedy(Hindi)|Ravi gupta",
    image:"photo.png",
    thumbImage:"thumb.png",
    auther:"Ravi gupta",
    views:"14M",
    timestamp:"13 days ago"
  },
  {
    _id:2,
    title:"Mansoon song|Ram babu",
    image:"photo.png",
    thumbImage:"thumb.png",
    auther:"Ram babu",
    views:"100k",
    timestamp:"2 days ago"
  },
  {
    _id:3,
    title:"Holi Song|Pawan Singh",
    image:"photo.png",
    thumbImage:"thumb.png",
    auther:"Pawan Singh",
    views:"130M",
    timestamp:"15 days ago"
  },
  {
    _id:4,
    title:"Code Pro|Sumit Singh",
    image:"photo.png",
    thumbImage:"thumb.png",
    auther:"Sumit Singh",
    views:"600k",
    timestamp:"15 days ago"
  }
]

export const VideoGrid = ()=>{
  return <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
    {
      VIDEOS.map((video)=><div>
        <VideoCard 
          key={video._id}
          title={video.title}
          image={video.image}
          thumbImage={video.thumbImage}
          auther={video.auther}
          views={video.views}
          timestamp={video.timestamp}
        />
      </div>)
    }
  </div>
}