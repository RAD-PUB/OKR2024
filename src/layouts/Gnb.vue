<template>
    <nav class="pub_nav">
        <ul>
            <li v-for="(el, idx) in gnbList" :key="idx">
                <span class="addedEmoji"></span> <a :href=el.path>{{ el.gnb }}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Gnb',
    data: () => ({
        gnbList: [
            {
                path: "/",
                gnb: "기본정책"
            },
            {
                path: "/swiper",
                gnb: "Swiper"
            },
            {
                path: "/btn",
                gnb: "Btn"
            },
            {
                path: "/pagination",
                gnb: "Pagination"
            },
            {
                path: "/form",
                gnb: "Form"
            },
            {
                path: "/modalpop",
                gnb: "Modal Pop"
            },
            {
                path: "/loadingbar",
                gnb: "Loading Bar"
            },
            {
                path: "/tab",
                gnb: "Tab"
            },
            {
                path: "/treemenu",
                gnb: "Tree Menu"
            },
        ],
        // 이모지 배열
        emojis: [
            '😄', '😃', '😀', '😊', '☺', '😉', '😍', '😘', '😚', '😗', '😙', '😜', '😝', '😛', '😳', '😁', '😔', '😌', '😒', '😞', '😣', '😢', '😂', '😭', '😪', '😥', '😰', '😅', '😓', '😩', '😫', '😨', '😱', '😠', '😡', '😤', '😖', '😆', '😋', '😷', '😎', '😴', '😵', '😲', '😟', '😦', '😧', '😈', '👿', '😮', '😬', '😐', '😕', '😯', '😶', '😇', '😏', '😑', '👲', '👳', '👮', '👷', '💂', '👶', '👦', '👧', '👨', '👩', '👴', '👵', '👱', '👼', '👸', '😺', '😸', '😻', '😽', '😼', '🙀', '😿', '😹', '😾', '👹', '👺', '🙈', '🙉', '🙊', '💀', '👽', '💩', '🔥', '✨', '🌟', '💫', '💥', '💢', '💦', '💧', '💤', '💨', '👂', '👀', '👅', '👄', '👍', '👌', '👊', '✊', '✌', '👋', '✋', '👐', '👆', '👇', '👉', '👈', '🙌', '🙏', '☝', '👏', '💪', '🚶', '🏃', '💃', '👫', '👪', '👬', '👭', '💏', '💑', '🙆', '🙅', '💁', '🙋', '💆', '💇', '👰', '🙎', '🙍', '🙇', '🎩', '👑', '👓', '🎀', '🌂', '💄', '💛', '💙', '💜', '💚', '❤', '💔', '💗', '💓', '💕', '💖', '💞', '💘', '💌', '💋', '💍', '💎', '👤', '👥', '💬', '👣', '💭', '🐶', '🐺', '🐱', '🐭', '🐹', '🐰', '🐸', '🐯', '🐨', '🐻', '🐷', '🐮', '🐗', '🐵', '🐒', '🐴', '🐑', '🐘', '🐼', '🐧', '🐦', '🐤', '🐥', '🐣', '🐔', '🐍', '🐢', '🐛', '🐝', '🐜', '🐞', '🐌', '🐙', '🐚', '🐠', '🐟', '🐬', '🐳', '🐋', '🐄', '🐏', '🐀', '🐃', '🐅', '🐇', '🐉', '🐎', '🐐', '🐓', '🐕', '🐖', '🐁', '🐂', '🐲', '🐡', '🐊', '🐫', '🐪', '🐆', '🐈', '🐩', '🐾', '💐', '🌸', '🌷', '🍀', '🌹', '🌻', '🌺', '🍁', '🍃', '🍂', '🌿', '🌾', '🍄', '🌵', '🌴', '🌲', '🌳', '🌰', '🌱', '🌼', '🌐', '🌞', '🌝'
        ],
    }),
    mounted() {
         this.prependRandomEmoji(); // prependRandomEmoji 함수 실행
    },
    methods: {
        prependRandomEmoji(){
        const addEmojiTarget = document.querySelector("ul").children;
        for(var i=0; i<addEmojiTarget.length; i++){
            var randomEmoji = Math.random() * this.emojis.length;
            var getRandomEmoji =  this.emojis[Math.floor(randomEmoji)];
            addEmojiTarget[i].querySelector('.addedEmoji').innerHTML = "";
            addEmojiTarget[i].querySelector('.addedEmoji').prepend(getRandomEmoji);
        }
        },
    },
    watch: {
        // 라우터 이동 시 prependRandomEmoji 함수 재실행
        $route(){
        this.prependRandomEmoji();
        }
    },
}
</script>