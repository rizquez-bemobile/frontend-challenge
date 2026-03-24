import { DEFAULT_LOADING_TEXT } from "../../shared/constants"

type ModalProps = {
    text?: string
    category?: "loading" | "error"
    onClose?: () => void
}

export const Modal = ({ text = DEFAULT_LOADING_TEXT, category = "loading", onClose }: ModalProps) => {
    return (
        <div className="fixed left-0 top-0 z-999 flex h-full w-full items-center justify-center bg-brand-grey-translucent">
            <div className="flex min-w-62.5 flex-col items-center gap-7.5 rounded-[10px] bg-brand-black p-6.25">
                {category === "loading" && (
                    <div className="h-11.25 w-11.25 animate-spin rounded-full border-[5px] border-brand-grey border-t-brand-white" />
                )}
                <p className="text-base font-normal text-brand-white">
                    {text}
                </p> 
                {category === "error" && (
                    <button 
                        type="button" 
                        onClick={onClose}
                        className="text-brand-white cursor-pointer bg-brand-blue p-2 rounded-lg"
                    >
                        Ok
                    </button>
                )}
            </div>
        </div>
    )
}