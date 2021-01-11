function sort(cards, elementSelector, desc) {
    return cards.sort((a, b) => {
        if (elementSelector) {
            const aEl = elementSelector(a);
            const bEl = elementSelector(b);

            if (desc) {
                if (aEl > bEl) return -1;
                if (aEl < bEl) return 1;
            }
            else {
                if (aEl < bEl) return -1;
                if (aEl > bEl) return 1;
            }
        }

        if (desc) {
            if (a.title > b.title) return -1;
            if (a.title < b.title) return 1;
        }
        else {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
        }

        return 0;
    });
}

export default sort;