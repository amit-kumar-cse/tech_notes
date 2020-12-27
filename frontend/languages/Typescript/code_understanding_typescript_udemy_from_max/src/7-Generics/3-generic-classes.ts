{
  class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
      this.data.push(item);
    }

    removeItem(item: T) {
      if (this.data.indexOf(item) !== -1) {
        return;
      }
      this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
      return [...this.data];
    }
  }

  const textStorage = new DataStorage<string>();
  textStorage.addItem("Hare");
  textStorage.addItem("Krsna");
  textStorage.addItem("Rama");
  console.log(textStorage.getItems());

  const numberStorage = new DataStorage<number>();
}

//Utility types examples of Partial and Readonly.
{
  interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
  }

  function createCourseGoal(
    title: string,
    description: string,
    completeUntil: Date
  ): CourseGoal {
    const courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = completeUntil;

    return courseGoal as CourseGoal;
  }

  //readonly example
  const names: Readonly<string[]> = ["Hare", "Krsna"];
  // names.push('Rama');
  // names[0] = 'Govind';
}
