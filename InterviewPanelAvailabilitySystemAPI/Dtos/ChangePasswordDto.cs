﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel;

namespace InterviewPanelAvailabilitySystemAPI.Dtos
{
    public class ChangePasswordDto
    {
        [Required(ErrorMessage = "Email id is required")]
        [StringLength(50)]
        [DisplayName("Email id")]
        public string Email { get; set; }

        [Required(ErrorMessage = " Old Password is required")]
        [DataType(DataType.Password)]
        [DisplayName("Old Password")]
        public string OldPassword { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$",
        ErrorMessage = "The password must be at least 8 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character.")]
        [DisplayName("NewPassword")]
        public string NewPassword { get; set; }

        [Required(ErrorMessage = "Confirm password is required")]
        [DataType(DataType.Password)]
        [Compare("NewPassword", ErrorMessage = "The password and confirmation password do not match.")]
        [DisplayName("Confirm password")]
        public string NewConfirmPassword { get; set; }

    }
}
