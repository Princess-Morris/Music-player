import { IProgressBar } from "../types/music"


function ProgressBar({ progress }: IProgressBar) {
    return (
        <div
            className="progress-style"
        >
            <div
            style={{ width: `${progress}%` }}
            >
            </div>
        </div>

    )
}

export default ProgressBar 