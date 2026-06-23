import Container from "@/components/ui/container";
import Grid from "@/components/ui/grid";
import Logo from "@/components/header/mobile/logo";
import IconsLeft from "@/components/header/mobile/icons-left";
import IconsRight from "@/components/header/mobile/icons-right";

export default function MobileHeader() {
  return (
    <div className="flex lg:hidden items-center justify-center h-12">
      <Container>
        <Grid>
          <IconsLeft />
          <Logo />
          <IconsRight />
        </Grid>
      </Container>
    </div>
  );
}
