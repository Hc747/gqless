const getDescription = user => user.description

export function DescriptionComponent({ user }) {
  // Same-file functions are flattened into an export
  return getDescription(user)
}
