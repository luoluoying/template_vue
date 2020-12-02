/**
 *
 * @param {ref} refForm form组件的ref对象
 * @param {Array} nameArray 需要校验form中字段的name数组
 */
export async function validateArray(refForm, nameArray = []) {
  let validateRes = true
  const promiseAll = []
  nameArray.map(v => promiseAll.push(refForm.validate(v)))
  if (promiseAll.length === 0) {
    promiseAll.push(refForm.validate())
  }
  await Promise.all(promiseAll).then(() => {
    validateRes = true
  }).catch(() => {
    validateRes = false
  })
  return validateRes
}
