export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-black text-white">
        <main className="container mx-auto px-6">{children}</main>
      </div>
    );
  }
  