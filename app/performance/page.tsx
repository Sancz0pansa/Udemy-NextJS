import Image from "next/image";
import performanceImg from '@/public/performance.jpg'
import Hero from "@/components/Hero";
export default function PerformancePage() {

  return <Hero img={performanceImg} alt="welding" title="We serve high performence applications"/>
}
