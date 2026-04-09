import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-padding min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center">
          <h1 className="text-gray-dark mb-4">404</h1>
          <h2 className="text-gray-dark mb-6">Page Not Found</h2>
          <p className="text-gray-DEFAULT mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Button href="/" variant="primary">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
