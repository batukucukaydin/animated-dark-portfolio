import { Cpu, Code2, Database, GitFork, Image, Film, Palette, PenTool, Terminal, Binary, Apple, Boxes, Wrench, FlaskConical } from 'lucide-react'

// Minimal, theme-friendly monochrome SVGs for popular stacks
export function SwiftIcon({ className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className} aria-hidden="true">
      <defs><linearGradient id="gi" x1="0" x2="1"><stop offset="0%" stopColor="#f05138"/><stop offset="100%" stopColor="#c7221f"/></linearGradient></defs>
      <rect rx="22" width="128" height="128" fill="url(#gi)" opacity="0.85"/>
      <path fill="#fff" d="M100.7 84.6c-7.7 10.6-25 13.6-39.6 7.3 14.5 8.9 31 10 39.6-7.3Zm-14.5-43c13.2 12 18.4 30.6 12.1 43.7C89 101 69.3 105 50.3 97.7c-7.8-3-15-7.6-21.3-13.4 9.9 5.6 21.7 8 33.8 6.5 7.6-1 14.7-3.7 20.8-7.9-10.4-6.8-21.7-16.9-32-28.5 8.7 7.3 18.2 13.5 27.6 18.4-9.7-9.6-18.6-20.8-26-32.4 8.3 7.3 17.5 13.7 27.4 19.3-5.2-6.6-9.8-13.7-13.9-21.3 6.6 6.4 12.7 13.3 18.4 20.6Z"/>
    </svg>
  )
}

export function JSIcon({className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className}><rect width="128" height="128" rx="14" fill="#11151b"/><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-mono,monospace" fontWeight="700" fontSize="56" fill="#e7e7ea">JS</text></svg>
  )
}
export function TSIcon({className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className}><rect width="128" height="128" rx="14" fill="#11151b"/><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-mono,monospace" fontWeight="700" fontSize="52" fill="#e7e7ea">TS</text></svg>
  )
}
export function PythonIcon({className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className}><rect width="128" height="128" rx="14" fill="#11151b"/><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-mono,monospace" fontWeight="700" fontSize="40" fill="#e7e7ea">PY</text></svg>
  )
}
export function JavaIcon({className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className}><rect width="128" height="128" rx="14" fill="#11151b"/><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-mono,monospace" fontWeight="700" fontSize="40" fill="#e7e7ea">JAVA</text></svg>
  )
}
export function CIcon({className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className}><rect width="128" height="128" rx="14" fill="#11151b"/><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-mono,monospace" fontWeight="700" fontSize="44" fill="#e7e7ea">C</text></svg>
  )
}
export function SQLIcon({className='h-4 w-4'}:{className?:string}){
  return (
    <svg viewBox="0 0 128 128" className={className}><rect width="128" height="128" rx="14" fill="#11151b"/><text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fontFamily="ui-mono,monospace" fontWeight="700" fontSize="40" fill="#e7e7ea">SQL</text></svg>
  )
}

export function AppleIcon({className='h-4 w-4'}:{className?:string}){ return <Apple className={className}/> }
export function OpenCVIcon({className='h-4 w-4'}:{className?:string}){ return <FlaskConical className={className}/> }
export function MVVMIcon({className='h-4 w-4'}:{className?:string}){ return <Boxes className={className}/> }
export function ARKitIcon({className='h-4 w-4'}:{className?:string}){ return <Wrench className={className}/> }
export function MLIcon({className='h-4 w-4'}:{className?:string}){ return <Cpu className={className}/> }
export function GitIcon({className='h-4 w-4'}:{className?:string}){ return <GitFork className={className}/> }
export function PhotoshopIcon({className='h-4 w-4'}:{className?:string}){ return <Image className={className}/> }
export function PremiereIcon({className='h-4 w-4'}:{className?:string}){ return <Film className={className}/> }
export function FCPXIcon({className='h-4 w-4'}:{className?:string}){ return <Film className={className}/> }
export function CanvaIcon({className='h-4 w-4'}:{className?:string}){ return <Palette className={className}/> }
export function ExcelIcon({className='h-4 w-4'}:{className?:string}){ return <TableIcon className={className}/> }
export function PowerPointIcon({className='h-4 w-4'}:{className?:string}){ return <PresentationIcon className={className}/> }

function TableIcon(props:any){ return <svg viewBox="0 0 24 24" className={props.className}><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor"/><path d="M3 9h18M9 20V9" stroke="currentColor"/></svg> }
function PresentationIcon(props:any){ return <svg viewBox="0 0 24 24" className={props.className}><rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor"/><path d="M12 16v4M7 20h10" stroke="currentColor"/></svg> }

export function skillIconFor(name:string){
  const n = name.toLowerCase()
  if(n==='swift') return SwiftIcon
  if(n==='swiftui') return AppleIcon
  if(n==='javascript') return JSIcon
  if(n==='typescript' || n==='next.js' || n==='react') return TSIcon
  if(n==='python') return PythonIcon
  if(n==='java') return JavaIcon
  if(n==='c') return CIcon
  if(n==='sql') return SQLIcon
  if(n.includes('ios')) return AppleIcon
  if(n.includes('opencv')) return OpenCVIcon
  if(n==='mvvm') return MVVMIcon
  if(n==='arkit') return ARKitIcon
  if(n.includes('machine')) return MLIcon
  if(n==='git') return GitIcon
  if(n==='photoshop') return PhotoshopIcon
  if(n.includes('premiere')) return PremiereIcon
  if(n.includes('final cut')) return FCPXIcon
  if(n==='canva') return CanvaIcon
  if(n==='excel') return ExcelIcon
  if(n==='powerpoint') return PowerPointIcon
  return Code2
}