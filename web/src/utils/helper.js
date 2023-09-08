export function classNameToObj(className) {
  const tailwindClasses = className.split(' ');
  const classObj = {};
  tailwindClasses.forEach((twc) => {
    const style = twc.split('-')[0];
    classObj[style] = twc;
  });
  return classObj;
}

export function mergeTailwindClass(baseClass, additionClass) {
  const classNames = additionClass.split(' ');
    const classObj = classNameToObj(baseClass)
    classNames.forEach((cn) => {
      const style = cn.split('-')[0]
      classObj[style] = cn
    });
    return Object.values(classObj).join(' ')
}
