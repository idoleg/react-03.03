describe('Название секции тестов', () => {

    it('Название теста', () => {
        const store = {isLoading: false};
        const action = loadingChats();

        expect(chatReducer(store, action))
            .toMatchObject( {isLoading: true});

    });
});



