import React from "react";
import { Grid, Item } from "@mui/material";

import Layouts from "../../layouts/Layouts";
import WidgetBody from "./WidgetBody";
import WidgetPanel from "./WidgetPanel";

export default function WidgetPage(){
    return(
        <Layouts>
            <Grid container>
                <Grid item>
                    <WidgetPanel />
                </Grid>
                <Grid item>
                    <WidgetBody />
                </Grid>
            </Grid>
        </Layouts>
    )
}