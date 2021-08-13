$(document).ready(function () {
    generateProfileAvatar();
    if (isShowAlert.toLowerCase() == "true") {
        var dlgContent = window.TM.App.LocalizationContent.SiteDownMessage + ' - <a>' + errorSiteUrl + '</a>.' + window.TM.App.LocalizationContent.SiteDownMessage2;

        var siteDownAlertDialogobj = new ejs.popups.Dialog({
            content: dlgContent,
            buttons: [
                {
                    click: dlgOkButtonClick,
                    buttonModel: { content: window.TM.App.LocalizationContent.OKButton }
                }],
            isModal: true,
            closeOnEscape: false,
            visible: false,
            width: '500px',
            animationSettings: { effect: 'Zoom' },
            zIndex: 4
        });

        function dlgOkButtonClick() {
            siteDownAlertDialogobj.hide();
        }

        siteDownAlertDialogobj.appendTo('#site-down-alert');

        siteDownAlertDialogobj.show();
    }
});