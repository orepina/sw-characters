import { characters } from './../../assets/file.json';

class Api{
	_makeGetRequest(url){
		return fetch(url)
			.then(response => {
				if (response.ok)
					return response.json()
				else
					throw new Error('request error');
			})
			.catch(error => {
				console.log(error.message);
				return null;
			})
	}

	_getCharacters(character, data){
		return characters.map((character, index) => {
			return {
				name: character.name,
				details: data[index]
			}
		});
	}

	getCharacters(success){
		Promise.all(characters.map((character) => this._makeGetRequest(character.url)))
			.then(data => this._getCharacters(characters, data))
			.then(data => success(data))
			.catch(error => {
				console.log(error.message);
			})
	}

	getFilms(urls, success, error){
		Promise.all(urls.map((url) => this._makeGetRequest(url)))
			.then(data => success(data))
			.catch(error => {
				console.log(error.message);
			})
	}

}

export default new Api();