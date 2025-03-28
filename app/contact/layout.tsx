export default function ContactLayout({children}: { children: React.ReactNode; }) {
    return (
        <div className="min-h-screen bg-black text-white">
            <main className="container mx-auto">{children}</main>
        </div>
    );
}