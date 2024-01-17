import { classes } from "@automapper/classes";
import { AutomapperModule } from "@automapper/nestjs";

export const MapperProvider = [
    AutomapperModule.forRoot(
        { strategyInitializer: classes() }
    )
];