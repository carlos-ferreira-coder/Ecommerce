import Container from "@/components/ui/container";
import Grid from "@/components/ui/grid";
import Logo from "@/components/header/desktop/logo";
import Navigation from "@/components/header/desktop/navigation";
import Icons from "@/components/header/desktop/icons";

export default function DesktopHeader() {
  return (
    <div className="hidden lg:flex items-center justify-center h-20">
      <Container>
        <Grid>
          <Logo />
          <Navigation />
          <Icons />
        </Grid>
      </Container>
    </div>
  );
}
