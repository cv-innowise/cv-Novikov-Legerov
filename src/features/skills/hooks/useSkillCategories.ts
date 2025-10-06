"use client"

import { SkillCategory } from "cv-graphql";
import { useQuery, useSuspenseQuery } from "@apollo/client/react";
import SKILL_CATEGORIES from "../api/skillCategories";

type SkillCategoriesResult = {
    skillCategories: SkillCategory[]
}

export const useSkillCategories = () => {
    const {data, error} = useSuspenseQuery<SkillCategoriesResult>(SKILL_CATEGORIES)

    return {
        skillCategories: data.skillCategories,
        error: error
    }
}