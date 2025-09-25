'use client'

import { Box, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { SkillsCategoryProps } from "./SkillsCategory.props";
import SkillButton from "../skillButton/SkillButton";
import { styles } from "./SkillsCategory.styles";

const SkillsCategory = ({categoryName, categorySkills, skills}: SkillsCategoryProps) => {
    const t = useTranslations();

    return (
        <Stack gap={"16px"}>
            <Typography>{categoryName}</Typography>
            <Box sx={styles.container}>
                {categorySkills.map((skill) => (
                    <SkillButton key={skill.name} skill={skill} skills={skills}/>
                ))}
            </Box>
        </Stack>
    )
}

export default SkillsCategory;