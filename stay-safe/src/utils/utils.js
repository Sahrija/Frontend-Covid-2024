export function formatThousand(number) {
    const formatter = new Intl.NumberFormat('id-ID');
    return formatter.format(number)
}
