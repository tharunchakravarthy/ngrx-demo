import { createAction, props } from "@ngrx/store";
import { Course } from "./model/course";
//This action is more like a cmd
export const loadAllCourses = createAction(
  "[Courses Resolver] Load All Courses"
);

//like effect to the above action
export const allCoursesLoaded = createAction(
  "[Load Courses Effect] All Courses Loaded",
  props<{courses: Course[]}>()
);