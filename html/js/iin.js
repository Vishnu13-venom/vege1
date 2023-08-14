// Navigation Clicks
window.dataLayer.push({
    event : "header_nav_click",
    click_text: "click_text", //If image "logo"
    click_url: "click_url",
});


// Sub Navigation Clicks
window.dataLayer.push({
    event : "sub_nav_click",
    header_title: "header_title",
    click_text: "click_text", 
    click_url: "click_url",
});


// Footer Navigation Clicks
window.dataLayer.push({
    event : "footer_click",
    click_text: "click_text", //If image/icon->alt/icon
    click_url: "click_url",
});


// Hamburger Clicks
window.dataLayer.push({
    event : "hamburger_click",
    action : "open/close",
});


// Tab Clicks
window.dataLayer.push({
    event : "tab_click",
    click_text: "click_text", 
});


// Link Clicks
window.dataLayer.push({
    event : "link_click",
    click_text: "click_text",
    click_url: "click_url",
});


// Asset Tracking
window.dataLayer.push({
    event : "breadcrumb_click",
    click_text: "click_text", 
    click_url: "click_url",
});

// Asset Tracking
window.dataLayer.push({
    event : "hero_banner_click",
    click_text: "click_text", 
    click_url: "click_url",
});


// User Actions / Conversion Events
// Request Information
window.dataLayer.push({
    event : "request_info_click",
    click_text: "click_text", 
    click_url: "click_url",
});



// User Actions / Conversion Events
// Schedule An Appointment
window.dataLayer.push({
    event : "schedule_appointment_click",
    click_text: "click_text", 
    click_url: "click_url",
});



// User Actions / Conversion Events
// Enroll Now
window.dataLayer.push({
    event : "enroll_now_click",
    click_text: "click_text", 
    click_url: "click_url",
});

// User Actions / Conversion Events
// Download Curriculum
window.dataLayer.push({
    event : "download_curriculum_click",
    click_text: "click_text", 
    click_url: "click_url",
});


// User Actions / Conversion Events
// Try Sample Class
window.dataLayer.push({
    event : "try_sample_class_click",
    click_text: "click_text", 
    click_url: "click_url",
});



// User Actions / Conversion Events
// Get My Course Syllabus
window.dataLayer.push({
    event : "get_my_course_syllabus_click",
    click_text: "click_text", 
    click_url: "click_url",
});


// User Actions / Conversion Events
// Contact
window.dataLayer.push({
    event : "contact_click",
    click_text: "click_text", 
    click_url: "click_url",
});


// User Actions / Conversion Events
// Get The Guide
window.dataLayer.push({
    event : "get_guide_click",
    click_text: "click_text", 
    click_url: "click_url",
});



// Form Interactions

//Form View
window.dataLayer.push({ 
    event: "form_view", 
    form_name: "form_name",
});

//Form Initiate
window.dataLayer.push({ 
    event: "form_initiate", 
    form_name: "form_name",
});

//Form Fallout
window.dataLayer.push({ 
    event: "form_fallout", 
    form_name: "form_name", 
    field_name: "field_name",
});

//Form Submit
window.dataLayer.push({ 
    event: "form_submit", 
    field_name: "field_name",
});
//should fire only on successful form submit and not on the button click


// Video Tracking

window.dataLayer.push({ 
    event: "video_start", 
    video_title: "video_title", 
});


window.dataLayer.push({ 
    event: "video_progress", 
    video_title: "video_title",
    video_percent: "video_percent",
});

window.dataLayer.push({ 
    event: "video_complete", 
    video_title: "video_title", 
});


// Others
//Accordian Clicks
window.dataLayer.push({
    event : "accordion_click",
    click_text: "click_text",
    action : "open/close",
});

// Chat Click
window.dataLayer.push({
    event : "chat_click",
    chat_action : "open/close",
});


// Social Share
window.dataLayer.push({
    event : "social_share",
    blog_title : "blog_title",
    share_type : "share_type"
});

