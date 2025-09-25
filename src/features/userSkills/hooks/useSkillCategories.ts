"use client"

import { SkillCategory } from "cv-graphql";
import { useQuery } from "@apollo/client/react";
import SKILL_CATEGORIES from "../api/skillCategories";

type SkillCategoriesResult = {
    skillCategories: SkillCategory[]
}

export const useSkillCategories = () => {
    return useQuery<SkillCategoriesResult>(SKILL_CATEGORIES)
}