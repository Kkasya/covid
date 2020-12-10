import create from '../utils/createElement';
import * as constants from '../data/constants';

export default class Footer {
    init() {
        this.footerInfo = this.createInfoAuthor();
        this.footerYear = create('span', 'footer__year', constants.year);
        this.footerCourse = this.createCourse();
        return create('div', 'footer', [this.footerInfo, this.footerYear, this.footerCourse]);
    }

    createInfoAuthor() {
        this.infoAuthor = create('span', 'footer__author', constants.nameAuthor);
        this.footerImgGit = create('img', 'footer__link-img', null, null, ['src', constants.srcIconGitHub]);
        this.footerAuthor = create('a', 'footer__link', [this.infoAuthor, this.footerImgGit], null,
            ['href', constants.hrefGitHub], ['target', '_blank']);
        return create('div', 'info', this.footerAuthor);
    }

    createCourse() {
        this.footerImgRss = create('img', 'footer__link-img_rsschool', null, null, ['src', constants.srcIconRss]);
        this.footerRss = create('a', 'footer__link', this.footerImgRss, null,
            ['href', constants.hrefRss], ['target', '_blank']);
        return create('div', 'footer__course', this.footerRss);
    }
}
