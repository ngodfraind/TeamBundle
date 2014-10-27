/*
 * This file is part of the Claroline Connect package.
 *
 * (c) Claroline Consortium <consortium@claroline.net>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

(function () {
    'use strict';
    
    $('#unregister-btn').on('click', function () {
        var teamId = $(this).data('team-id');
        var teamName = $(this).data('team-name');
        
        window.Claroline.Modal.confirmRequest(
            Routing.generate(
                'claro_team_self_unregister_user',
                {'team': teamId}
            ),
            teamMenuPage,
            null,
            Translator.get('team:unregister_from_team_comfirm_message'),
            teamName
        );
    });
    
    var teamMenuPage = function () {
        var workspaceId = $('#datas-block').data('workspace-id');
        window.location = Routing.generate(
            'claro_team_user_menu',
            {'workspace': workspaceId}
        );
    };
})();