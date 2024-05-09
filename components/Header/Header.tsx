import Link from "next/link";

export default function Header() {
  return (  <div className="min-h-3 w-full bg-slate-400 flex justify-end box-border px-4">
        <ul className="flex gap-3">
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/performance'>Performance</Link></li>
          <li><Link href='/scale'>Scale</Link></li>
          <li><Link href='/reliability'>Reliability</Link></li>
        </ul>
      </div>)
}