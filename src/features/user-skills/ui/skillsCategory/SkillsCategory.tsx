'use client'

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import { SkillsCategoryProps } from "./SkillsCategory.props";
import SkillButton from "../skillButton/SkillButton";

const SkillsCategory = ({category, skills}: SkillsCategoryProps) => {
    const t = useTranslations();

    return (
        <Box>
            <Typography>{t(category)}</Typography>
            <Box>
                {skills.map((skill) => (
                    <SkillButton skill={skill}/>
                ))}
            </Box>
        </Box>
    )
}

export default SkillsCategory;