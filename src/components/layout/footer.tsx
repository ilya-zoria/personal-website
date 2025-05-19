import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
  return (
    <div className="w-full flex flex-row justify-between">
      <p className="text-sm">
        <a className="hover:underline" href="https://savelife.in.ua/en/">
          Support Ukraine 🇺🇦
        </a>
      </p>
      <div className="flex gap-2 align-baseline">
        <p className="text-sm">Made with</p>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://www.figma.com/">
                <img src="/images/icons/ic-figma.svg" alt="ic-figma" width="20" height="20" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Figma</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="https://www.cursor.com/">
                <img src="/images/icons/ic-cursor.svg" alt="ic-cursor" width="20" height="20" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Cursor AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
} 