export type ModalProps = {
    text?: string
    category?: "loading" | "error"
    onClose?: () => void
}