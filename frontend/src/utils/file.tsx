export const validateImageFile = (file: File): string | null => {
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif"];

  if (!ALLOWED_TYPES.includes(file.type)) {
    return "File must be an image (JPG, PNG, or GIF)";
  }

  if (file.size > MAX_SIZE) {
    return "File size must be less than 10MB";
  }

  return null;
};
