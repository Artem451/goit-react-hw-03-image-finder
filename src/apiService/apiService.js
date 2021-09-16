export default async function apiService(imgName, page) {
  const API_KEY = '22764492-08543241292e25caceb14f7aa';
  const response = await fetch(
    `https://pixabay.com/api/?
    q=${imgName}&
    page=${page}&
    key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  if (response.ok) {
    return response.json();
  }
  return await Promise.reject(new Error('Что то пошло не так'));
}
