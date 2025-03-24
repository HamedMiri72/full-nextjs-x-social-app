import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";





export default function HomePage() {
  
  return (
    <div>

      <div className="px-4 pt-4 flex justify-between items-center text-textGray font-bold border-b-[1px] border-textGray">
        <Link href="/" className="pb-3 flex items-center border-b-4 border-iconBlue">For you</Link>
        <Link href="/" className="flex items-center ">Following</Link>
      </div>
      
      <Share/>
      <Feed/>
    </div>
    
  );
}
