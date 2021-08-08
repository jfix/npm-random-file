declare namespace randomFile {
    interface randomFile {
        (dir: string, callback: (err: NodeJS.ErrnoException | null, file?: string) => void): void
    }
}

declare var randomFile: randomFile.randomFile;
export = randomFile;
