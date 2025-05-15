export async function loadNav() {
    try {
        const response = await fetch(`/navigation-index.json`);
        if (!response.ok) {
            throw new Error(`Failed to fetch navigation: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();

        return result.data.filter(item => 
            item.path.startsWith('/pages/')
        );
    } catch (error) {
        console.error('Error loading navigation:', error);
        return [];
    }
}

export const isAuthorMode = window.location.href.includes('.html');
