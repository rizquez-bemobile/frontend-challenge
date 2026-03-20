import type { LoadingProps } from "../../domain/types/LoadingProps"
import { DEFAULT_LOADING_TEXT } from "../../shared/constants"

export const Loading = ({ text = DEFAULT_LOADING_TEXT }: LoadingProps) => {
    return (
        <div className="fixed left-0 top-0 z-999 flex h-full w-full items-center justify-center bg-brand-grey-translucent">
            <div className="flex min-w-62.5 flex-col items-center gap-7.5 rounded-[10px] bg-brand-black p-6.25">
                <div className="h-11.25 w-11.25 animate-spin rounded-full border-[5px] border-brand-grey border-t-brand-white"></div>
                <p className="text-base font-normal text-brand-white">
                    {text}
                </p>
            </div>
        </div>
    )
}