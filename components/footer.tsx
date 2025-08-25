export function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className="border-t bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
                <p className="text-sm text-muted-foreground">
                    © {year} IdeaBench. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

