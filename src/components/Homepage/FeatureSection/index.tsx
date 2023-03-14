import React from "react";
import { Grid, GridItem } from "./style";
import { Card } from "@/modules/Molecules";

// Assets
import Icon from "@/assets/svg/rimediazione_app.svg";
import Icon2 from "@/assets/svg/accessscan.svg";
import Icon3 from "@/assets/svg/corsi_di_formazione.svg";
import Icon4 from "@/assets/svg/accesswidget.svg";

const FeatureSection: React.FC = () => {
  return (
    <Grid>
      <GridItem>
        <Card
          icon={Icon}
          title="Competenza e dedizione"
          description="Grazie all’esperienza ventennale del nostro team di consulenza possiamo
        aiutarti a rendere accessibili tutti i tuoi touchpoint digitali."
        />
      </GridItem>
      <GridItem>
        <Card
          icon={Icon2}
          title="Competenza e dedizione"
          description="Grazie all’esperienza ventennale del nostro team di consulenza possiamo
        aiutarti a rendere accessibili tutti i tuoi touchpoint digitali."
        />
      </GridItem>
      <GridItem>
        <Card
          icon={Icon3}
          title="Competenza e dedizione"
          description="Grazie all’esperienza ventennale del nostro team di consulenza possiamo
        aiutarti a rendere accessibili tutti i tuoi touchpoint digitali."
        />
      </GridItem>
      <GridItem>
        <Card
          icon={Icon4}
          title="Competenza e dedizione"
          description="Grazie all’esperienza ventennale del nostro team di consulenza possiamo
        aiutarti a rendere accessibili tutti i tuoi touchpoint digitali."
        />
      </GridItem>
    </Grid>
  );
};

export default FeatureSection;
