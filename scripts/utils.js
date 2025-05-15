export async function loadNav() {
    
    const response = await fetch(`/query-index.json`);
    if (!response.ok) {
        throw new Error('Failed to fetch query index');
    }
    const result = await response.json();
    console.log(result);
}

export const isAuthorMode = window.location.href.includes('.html');
