import IconWrapper from './IconWrapper';

export default {
    name: 'StarFilledIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.072 17.284l-3.905 2.053a1 1 0 0 1-1.451-1.054l.745-4.349-3.159-3.08a1 1 0 0 1 .554-1.705l4.366-.635 1.953-3.956a1 1 0 0 1 1.794 0l1.952 3.956 4.366.635a1 1 0 0 1 .555 1.705l-3.16 3.08.746 4.349a1 1 0 0 1-1.45 1.054l-3.906-2.053z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};