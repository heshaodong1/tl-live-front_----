<template>
    <div class="movie-list">
        <div class="movie-item" v-for="movie in movies" :key="movie.id" @mouseover="showDescription(movie)"
            @mouseout="hideDescription" @click="showMovie(movie)">
            <img :src="movie.image" :alt="movie.title" @mouseover="showDescription(movie)"
                @mouseout="hideDescription" />
            <p class="movie-title">{{ movie.title }}</p>
            <div class="movie-description-wrapper" v-if="currentMovie === movie">
                <p class="movie-description">{{ movie.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 测试电影数据  
const movies = ref([
    { id: 1, title: '智取威虎山', image: '/img/movie1.jpeg', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' },
    { id: 2, title: '西虹市首富', image: '/img/movie2.jpeg', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' },
    { id: 3, title: '夏洛特烦恼', image: '/img/movie3.jpeg', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' },
    { id: 4, title: '人在囧途', image: '/img/movie4.png', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' },
    { id: 5, title: '龙门飞甲', image: '/img/movie5.jpeg', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' },
    { id: 6, title: '四大天王', image: '/img/movie6.jpeg', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' },
    { id: 7, title: '武状元苏乞儿', image: '/img/movie7.png', description: '[内容简介]这是国内做火爆的电影，非常非常好看。图灵直播，记录美好生活' }
    // ... 更多电影数据  
]);

// 当前悬停的电影  
const currentMovie = ref(null);

// 显示简介  
const showDescription = (movie) => {
    currentMovie.value = movie;
};

// 隐藏简介  
const hideDescription = () => {
    currentMovie.value = null;
};

const showMovie = (movie) => {
    console.info(movie.id)
}
</script>

<style scoped>
.movie-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}

.movie-item {
    position: relative;
    width: calc(16.66% - 20px);
    /* 假设每行显示3个电影 */
    margin: 10px;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    /* 确保简介不会溢出电影项 */
}

.movie-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
    /* 平滑过渡效果 */
}

.movie-item:hover img {
    opacity: 0.7;
    /* 鼠标悬停时图片变暗 */
}

.movie-title {
    padding: 10px;
    text-align: center;
}

.movie-description-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    /* 半透明背景 */
    color: #fff;
    display: flex;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    opacity: 0;
    transition: opacity 0.3s ease;
    /* 平滑过渡效果 */
    pointer-events: none;
    /* 确保点击事件可以穿透到下面的图片 */
}

.movie-item:hover .movie-description-wrapper {
    opacity: 1;
    /* 鼠标悬停时显示简介 */
}

.movie-description {
    padding: 10px;
    text-align: center;
    max-width: 80%;
    /* 可选，限制简介宽度 */
}
</style>