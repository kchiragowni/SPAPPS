import pnp from '../lib/pnp.min';

class SPApi {
    static getRequest(listTitle) {
        return pnp.sp.web
                .lists.getByTitle(listTitle).items
                    .get(undefined, {
                        headers: {
                            'Accept': 'application/json;odata=nometadata'
                        }
                    })
                    .then((items) => {
                        console.log(items);
                        return items;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
    }
}

export default SPApi;
