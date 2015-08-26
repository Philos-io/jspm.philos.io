import headerTemplate from './header.tpl.html';


function header(){
	return {
		restrict: 'E',
		template: headerTemplate
	}
}

export default header;