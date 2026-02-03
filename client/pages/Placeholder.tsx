import MainLayout from "@/components/MainLayout";

interface PlaceholderProps {
  title: string;
  description?: string;
}

export default function Placeholder({
  title,
  description = "This page is coming soon. Continue prompting to fill in the content for this page.",
}: PlaceholderProps) {
  return (
    <MainLayout>
      <div className="pb-16 lg:pb-0 min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground mb-8">{description}</p>
          <div className="inline-block px-8 py-4 bg-secondary rounded-2xl border-2 border-dashed border-border">
            <p className="text-sm text-muted-foreground">
              Ready to build something amazing here?
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
